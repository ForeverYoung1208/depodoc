class OptypesController < ApplicationController
  before_action :set_optype, only: [:show, :edit, :update, :destroy]

  # GET /optypes
  # GET /optypes.json
  def index
    @optypes = Optype.all
  end

  # GET /optypes/1
  # GET /optypes/1.json
  def show
  end

  # GET /optypes/new
  def new
    @optype = Optype.new
  end

  # GET /optypes/1/edit
  def edit
  end

  # POST /optypes
  # POST /optypes.json
  def create
    @optype = Optype.new(optype_params)

    respond_to do |format|
      if @optype.save
        format.html { redirect_to @optype, notice: 'Optype was successfully created.' }
        format.json { render :show, status: :created, location: @optype }
      else
        format.html { render :new }
        format.json { render json: @optype.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /optypes/1
  # PATCH/PUT /optypes/1.json
  def update
    respond_to do |format|
      if @optype.update(optype_params)
        format.html { redirect_to @optype, notice: 'Optype was successfully updated.' }
        format.json { render :show, status: :ok, location: @optype }
      else
        format.html { render :edit }
        format.json { render json: @optype.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /optypes/1
  # DELETE /optypes/1.json
  def destroy
    @optype.destroy
    respond_to do |format|
      format.html { redirect_to optypes_url, notice: 'Optype was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_optype
      @optype = Optype.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def optype_params
      params.require(:optype).permit(:name)
    end
end
